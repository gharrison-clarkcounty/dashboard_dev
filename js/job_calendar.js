// Get weather forecast and conditions
$.getJSON('https://api.weather.gov/gridpoints/VEF/125,89/forecast',function(data){
    wxUpdated = data.properties.updated;
    wxTimePeriod0 = data.properties.periods[0].name;
    wxTemp0 = data.properties.periods[0].temperature;
    wxWind0 = data.properties.periods[0].windSpeed;
    wxWindDir0 = data.properties.periods[0].windDirection;
    wxIcon0 = data.properties.periods[0].icon;
    wxDetFc0 = data.properties.periods[0].detailedForecast;
    wxForecast();
});
function wxForecast(){
    // figure out what skycon to use based on nws icon
    
    document.getElementById('wx-time').innerHTML = '<small>' + wxUpdated + '</small>';
    document.getElementById('wx-timeperiod-0').innerHTML = wxTimePeriod0;
    document.getElementById('wx-icon-0').innerHTML = '<img src="' + wxIcon0 + '">';
    document.getElementById('wx-temp').innerHTML = wxTemp0 + ' F';
    document.getElementById('wx-wind').innerHTML = 'Winds ' + wxWindDir0 + ' @ ' + wxWind0;
    document.getElementById('wx-detailed-fc').innerHTML = wxDetFc0;
};

// Generate jobs calendar widget
$.getJSON('https://ccgisfiles01m:5000/query/allserverjobs/metrics',function(data){
    allCalData = data.result;
    jobsCalendar();
});
function jobsCalendar(){
    var today = new Date();
    var todayDate = today.getFullYear() + '-' + ('0' + (today.getMonth()+1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    var calEvents = [];

    for(i=0; i < allCalData.length; i++){
        if(allCalData[i].status == 'ok'){var calColor = '#00802b'}else{var calColor = '#dc3545'};
        calEvents.push(
            {
                'title':allCalData[i].name,
                'start':allCalData[i].calStart,
                'end':allCalData[i].calEnd,
                'color':calColor,
                'description':allCalData[i].message[0]
            }
        )
    };
    $('#jobs-calendar').fullCalendar({
        defaultDate: todayDate,
        defaultView:'agendaWeek',
        slotEventOverlap:true,
        agendaEventMinHeight:18,
        editable: false,
        eventLimit: true, // adds "more" link
        events: calEvents,
        contentHeight:'auto',
        header:{
            left:'prev,next today',
            center:'title',
            right:'agendaWeek,month,agendaDay'
        },
        eventClick: function(events){
            $('#modalTitle').html(events.title + ' details');
            $('#modalBody').html('Started: ' + (events.start).toLocaleString() + '<br>Ended: ' + (events.end).toLocaleString() + '<br><br>Job error details: ' + events.description);
            $('#calendarModal').modal();
        }
    })
}