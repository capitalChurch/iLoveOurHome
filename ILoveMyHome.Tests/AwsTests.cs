using System;
using System.Threading.Tasks;
using ILoveMyHome.Model;
using NUnit.Framework;

namespace Tests
{
    public class AwsTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [TestCase(VariableNames.AwsIdAccessKey)]
        [TestCase(VariableNames.AwsBucketName)]
        [TestCase(VariableNames.AwsIdAccessKey)]
        public void TestGetEnvironmentVariables(string variableName)
        {
            var variable = Environment.GetEnvironmentVariable(variableName, EnvironmentVariableTarget.Machine);
            
            Assert.IsNotNull(variable);
        }

        [Test]
        public async Task TestWriteFileAws()
        {
            var fileToBeSerialized = new
            {
                Id = 133,
                Name = "This is the name"
            };
            
            var target = new S3Repository();
            await target.WriteInFile("133", fileToBeSerialized);
        }

        [Test]
        public async Task ListAllBucketsTest()
        {
            var result = await new S3Repository().ListAllBuckets();
            
            Assert.IsNotEmpty(result);
        }
    }
}