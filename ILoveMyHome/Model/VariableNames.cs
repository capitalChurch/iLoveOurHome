using System;
using System.Collections.Generic;

namespace ILoveMyHome.Model
{
    public enum AwsConstants
    {
        AwsIdAccessKey,
        AwsSecretKey,
        AwsBucketName,
    }

    public class Constants
    {
        private static readonly Dictionary<AwsConstants, string> dic = new Dictionary<AwsConstants, string>
        {
            {AwsConstants.AwsIdAccessKey, "awsIdAccessKey"},
            {AwsConstants.AwsSecretKey, "awsSecretKey"},
            {AwsConstants.AwsBucketName, "awsBucketName"},    
        };

        public static string Get(AwsConstants constant)
        {
            if(!dic.ContainsKey(constant))
                throw new Exception("Environment Variable not catalogued");

            return Environment.GetEnvironmentVariable(dic[constant]);
        }
    }
}