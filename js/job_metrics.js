// Initialize popovers
$(function () {
    $('[data-toggle="popover"]').popover()
});

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

// Grab server jobs and current status
$.getJSON('https://ccgisfiles01m:5000/query/allserverjobs/descriptions',function(data){
    jobsDesc = data.result;
    serverJobs();
});
function serverJobs(){
    var jobsHTML = [];
    var jobsGrid = [];
    var jobNames = [];
    for(i=0; i < jobsDesc.length; i++){
        jobsHTML.push(`
            <div class="card bg-primary" id="${jobsDesc[i].name}">
                <h5 class="card-header">${jobsDesc[i].name}</h5>
                <div class="card body bg-dark">
                    Contact: ${jobsDesc[i].contact}<br>
                    Server: ${jobsDesc[i].server}<br>
                    Job Action: ${jobsDesc[i].action}<br>
                    Description: ${jobsDesc[i].description}<br>
                    Scripts Triggered: <ul>${(jobsDesc[i].scripts).map(d=>`<li>${d}</li>`).join('')}</ul>
                    Datasets Created/Modified: <ul>${(jobsDesc[i].datasets).map(d=>`<li>${d}</li>`).join('')}</ul>
                    Days Scheduled: <ul>${(jobsDesc[i].days).map(d => `<li>${d}</li>`).join('')}</ul>
                    Time Scheduled: ${jobsDesc[i].time}<br>
                    Last Run: ${jobsDesc[i]['last run']}<br>
                    Status: ${jobsDesc[i].status}
                    <br>
                    <small><a href="#" style="text-decoration:none">Return to top</a></small>
                </div>
            </div>
        `);
        jobNames.push(`<a class="dropdown-item" href="#${jobsDesc[i].name}">${jobsDesc[i].name}</a>`);
    };
    // Card color changes based on time
    eMessage = '';
    for(i=0;i<jobsDesc.length;i++){
        if(jobsDesc[i].status == 'ok'){cardColor = 'text-light bg-success'}
        else if(jobsDesc[i].status == 'error'){cardColor = 'text-light bg-danger';eMessage = jobsDesc[i].message}
        else{cardColor = 'text-light bg-secondary'};
        jobsGrid.push(`
            <div class="card ${cardColor} mb-3" style="display:inline-block">
                <div class="card-body"  data-toggle="tooltip" data-html="true" title="${eMessage}">
                    ${jobsDesc[i].name}
                </div>
            </div>
        `);
    };
    $('.select-jobs').html(jobNames.join(''));
    $('.server-job-descriptions').html(jobsHTML.join('<br>'));
    $('.job-grid').html(jobsGrid.join(''));
};