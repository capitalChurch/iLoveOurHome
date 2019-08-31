using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Amazon;
using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using Newtonsoft.Json;

namespace ILoveMyHome.Model
{
    public class S3Repository
    {
        private readonly string awsIdAccessKey = Environment.GetEnvironmentVariable(VariableNames.AwsIdAccessKey, EnvironmentVariableTarget.Machine);
        private readonly string awsSecretKey = Environment.GetEnvironmentVariable(VariableNames.AwsSecretKey, EnvironmentVariableTarget.Machine);
        private readonly string awsBucketName = Environment.GetEnvironmentVariable(VariableNames.AwsBucketName, EnvironmentVariableTarget.Machine);
        private readonly AWSCredentials credentials;
        private readonly AmazonS3Client _client;

        public S3Repository()
        {
            credentials = new BasicAWSCredentials(this.awsIdAccessKey, this.awsSecretKey);
            _client = new AmazonS3Client(credentials, RegionEndpoint.SAEast1);
        }

        public async Task WriteInFile(string id, object obj)
        {
            using var ms = new MemoryStream();

            var uploadRequest = new TransferUtilityUploadRequest
            {
                InputStream = ms,
                Key = id,
                BucketName = awsBucketName,
                CannedACL = S3CannedACL.Private
            };

            var text = JsonConvert.SerializeObject(obj);
            
            var tw = new StreamWriter(ms);
            tw.Write(text);
            tw.Flush();
            ms.Position = 0;
            
            var utility = new TransferUtility(_client);
            await utility.UploadAsync(uploadRequest);
        }

        public async Task<List<string>> ListAllBuckets()
        {
            var response = await _client.ListBucketsAsync();

            return response.Buckets.Select(x => x.BucketName).ToList();
        }
    }
}