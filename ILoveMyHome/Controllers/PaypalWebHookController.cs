using System;
using System.Threading.Tasks;
using ILoveMyHome.Model;
using Microsoft.AspNetCore.Mvc;

namespace ILoveMyHome.Controllers
{
    [Route("api/[controller]")]
    public class PaypalWebHookController : Controller
    {
        private static Random _random = new Random();
        private readonly S3Repository _repo;

        public PaypalWebHookController(S3Repository repo)
        {
            this._repo = repo;
        }

        [HttpPost]
        public Task SaveEventWebHook([FromBody] object obj) =>
            this._repo.WriteInFile(_random.Next().ToString(), obj);
    }
}