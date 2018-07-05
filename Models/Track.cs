using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace EMCollection.Models
{
    [JsonObject]
    public class Track
    {
        [ScaffoldColumn(false)]
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("duration")]
        public string Duration { get; set; }
        [JsonProperty("isFavorite")]
        public bool IsFavorite { get; set; }
        [JsonProperty("isListened")]
        public bool IsListened { get; set; }
        [JsonProperty("rating")]
        public decimal Rating { get; set; }
        [JsonIgnore]
        public virtual Album Album { get; set; }
    }
}
