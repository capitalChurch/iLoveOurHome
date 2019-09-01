using System;
using ILoveMyHome.Model;
using NUnit.Framework;

namespace Tests
{
    public class AimTests
    {

        [TestCase(13442)]
        [TestCase(13332)]
        [TestCase(3 * 1000 * 1000)]
        public void SetAimTests(decimal value)
        {
            Aim.Value = value;

            var result = new S3Repository().ReadFile(Constants.nameFileAim).Result;
            var expected = Convert.ToDecimal(result);
            
            Assert.AreEqual(expected, value);
        }
        
        [Test]
        public void GetAimTests()
        {
            var result = Aim.Value;
            
            Assert.AreNotEqual(0, result);
        }
    }
}