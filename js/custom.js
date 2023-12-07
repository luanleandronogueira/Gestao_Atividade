
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

      themeSystem: 'bootstrap5',

      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },

      locale: 'pt-br',
      //initialDate: '2023-01-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      
      
      // eventClick: function(arg) {
      //   if (confirm('Are you sure you want to delete this event?')) {
      //     arg.event.remove()
      //   }
      // },
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: 'controladores/listar_eventos.php' 

    });

    calendar.render();
  });
