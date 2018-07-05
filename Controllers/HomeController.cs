using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using EMCollection.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

namespace EMCollection.Controllers
{
    //[Route("api")]
    [EnableCors("AllowAngularLocalHost")]
    public class HomeController : Controller
    {
        private DbEntitiesContext _context;
        
        public HomeController(DbEntitiesContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/getMusicians")]
        public string GetMusicians()
        {
            return JsonConvert.SerializeObject(_context.Musicians.Include(a => a.Albums).ThenInclude(b => b.Tracks).ToList());
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
