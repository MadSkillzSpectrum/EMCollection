using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using EMCollection.Models;

namespace EMCollection.Controllers
{
    public class HomeController : Controller
    {
        private DbEntitiesContext _context;
        
        public HomeController(DbEntitiesContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/getMusicians")]
        public IEnumerable<Musician> GetMusicians()
        {
            return _context.Musicians;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
