var repeatingEvents = function (title, start, end, dow, color) {
  return [{
    title: title,
    start: start,
    end: end,
    dow: dow, 
    ranges: [{
      start: moment('2018-03-26','YYYY-MM-DD'),
      end: moment('2018-04-13', 'YYYY-MM-DD')
    },{
      start: moment('2018-04-23', 'YYYY-MM-DD'),
      end: moment('2018-06-15','YYYY-MM-DD')
    }],
    color: color
  }];
}

$('#calendar').fullCalendar({
  defaultView: 'month',
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  },

  eventRender: function(event, element, view){
    if (event.ranges != undefined)
      return (event.ranges.filter(function(range){
          return (event.start.isBefore(range.end) &&
                  event.end.isAfter(range.start));
      }).length)>0;
    else
      return true;
  },

  eventSources: [
    function( start, end, timezone, callback ){
      var events = repeatingEvents('Meeting with prof.', '14:30', '15:30', [2], '#3f51b5');
      callback(events);
    }, 
    function( start, end, timezone, callback ){
      var events = repeatingEvents('Meeting with mentors', '17:20', '18:00', [3], '#4caf50');
      callback(events);
    }, 
    { // Capstone Design official schedule
      events: [
        {
          title: 'Project Topic Presentation',
          start: '2018-03-30T13:00',
          end: '2018-03-30T16:30'
        },
        {
          title: 'Progress Presentation 1',
          start: '2018-04-27T13:00',
          end: '2018-04-27T16:30'
        },
        {
          title: 'Progress Presentation 2',
          start: '2018-05-18T13:00',
          end: '2018-05-18T16:30'
        }, 
        {
          title: 'Final Presentation and Demonstration',
          start: '2018-06-15T13:00',
          end: '2018-06-15T16:30'
        },        
      ],
      color: '#f44336' // red
    },
    { // Our schedule for project
      events: [
        /* Sample event
        {
          title: 'Sample Event',
          start: 'yyyy-mm-dd',  // If you want to add "time", then yyyy-mm-ddThh:mm (ex. 2018-04-13T23:45)
          end: 'yyyy-mm-dd',
          allDay: true, // If false, then it shows "time" content 
          color: '#4db6ac'
        }, // Don't forget Comma(,)!!!
        */      
      ],
    }
  ],
});