using ILoveMyHome.Model;
using Microsoft.AspNetCore.Mvc;

namespace ILoveMyHome.Controllers
{
    [Route("api/[controller]")]
    public class HowMuchIsMissingController : Controller
    {
        [HttpGet]
        public decimal Get() => Aim.Value;

        [HttpPost("{value}")]
        public void UpdateAim(decimal value) => Aim.Value = value;
    }
}