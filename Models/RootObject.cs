using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace EMCollection.Models
{
    public class RootObject
    {
        [JsonProperty("musicians")]
        public List<Musician> Musicians { get; set; }
    }
}
