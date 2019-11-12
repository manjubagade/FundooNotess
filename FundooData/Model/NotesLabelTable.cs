using System;
using System.Collections.Generic;
using System.Text;

namespace FundooData.Model
{
    public class NotesLabelTable
    {
      
        public int Id { get; set; }

       
        public int LableId { get; set; }

        /// <summary>
        /// Gets or sets the note identifier.
        /// </summary>
        /// <value>
        /// The note identifier.
        /// </value>
        public int NoteId { get; set; }

        /// <summary>
        /// Gets or sets the user identifier.
        /// </summary>
        /// <value>
        /// The user identifier.
        /// </value>
        public Guid UserId { get; set; }
    }
}
