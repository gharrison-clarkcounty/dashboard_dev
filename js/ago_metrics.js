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

// get current date
var dateObj = new Date();
var month = dateObj.getMonth() + 1;
var day = dateObj.getDate();
var year = dateObj.getFullYear();
todaydate = month + '/' + day + '/' + year

// ---------------------------------------------------------------------------
// GISMO service reponse times
// time period
$.getJSON('https://ccgisfiles01m:5000/status',function(data){
    var time = `${data.result[0].time}`
    $('.service_check_time').html('GISGATE Service Response Times as of: ' + time + ' on ' + todaydate)
});

// ab142
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/AB142',function(data2){
        var ab142 = `${data1.result[0].AB142.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.ab142').html('AB142: ' + ab142).css('background-color',color);
    });
});
// address
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/Address',function(data2){
        var Address = `${data1.result[0].Address.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.Address').html('Address: ' + Address).css('background-color',color);
    });
});
// AdoptedTrails
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/AdoptedTrails',function(data2){
        var AdoptedTrails = `${data1.result[0].AdoptedTrails.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.AdoptedTrails').html('AdpTrails: ' + AdoptedTrails).css('background-color',color);
    });
});
// AGParcel
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/AGParcel',function(data2){
        var AGParcel = `${data1.result[0].AGParcel.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.AGParcel').html('AGParcel: ' + AGParcel).css('background-color',color);
    });
});
// airportheight
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/airportheight',function(data2){
        var airportheight = `${data1.result[0].airportheight.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.airportheight').html('AirHeight: ' + airportheight).css('background-color',color);
    });
});
// AirZone
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/AirZone',function(data2){
        var AirZone = `${data1.result[0].AirZone.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.AirZone').html('AirZone: ' + AirZone).css('background-color',color);
    });
});
// Annotation
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/Annotation',function(data2){
        var Annotation = `${data1.result[0].Annotation.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.Annotation').html('Anno: ' + Annotation).css('background-color',color);
    });
});
// AssessorAnno
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/AssessorAnno',function(data2){
        var AssessorAnno = `${data1.result[0].AssessorAnno.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.AssessorAnno').html('AsAnno: ' + AssessorAnno).css('background-color',color);
    });
});
// AssessorMap
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/AssessorMap',function(data2){
        var AssessorMap = `${data1.result[0].AssessorMap.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.AssessorMap').html('AsMap: ' + AssessorMap).css('background-color',color);
    });
});
// basemap
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/basemap',function(data2){
        var basemap = `${data1.result[0].basemap.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.basemap').html('basemap: ' + basemap).css('background-color',color);
    });
});
// Cities
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/Cities',function(data2){
        var Cities = `${data1.result[0].Cities.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.Cities').html('Cities: ' + Cities).css('background-color',color);
    });
});
// communitydistricts
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/communitydistricts',function(data2){
        var communitydistricts = `${data1.result[0].communitydistricts.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.communitydistricts').html('CommDist: ' + communitydistricts).css('background-color',color);
    });
});
// con2016_2ft
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/con2016_2ft',function(data2){
        var con2016_2ft = `${data1.result[0].con2016_2ft.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.con2016_2ft').html('Con16 2ft: ' + con2016_2ft).css('background-color',color);
    });
});
// daqm
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/daqm',function(data2){
        var daqm = `${data1.result[0].daqm.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.daqm').html('daqm: ' + daqm).css('background-color',color);
    });
});
// designoverlays
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/designoverlays',function(data2){
        var designoverlays = `${data1.result[0].designoverlays.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.designoverlays').html('DesOvlay: ' + designoverlays).css('background-color',color);
    });
});
// Drainage
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/Drainage',function(data2){
        var Drainage = `${data1.result[0].Drainage.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.Drainage').html('Drainage: ' + Drainage).css('background-color',color);
    });
});
// Easement
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/Easement',function(data2){
        var Easement = `${data1.result[0].Easement.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.Easement').html('Easement: ' + Easement).css('background-color',color);
    });
});
// facilities
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/facilities',function(data2){
        var facilities = `${data1.result[0].facilities.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.facilities').html('facilities: ' + facilities).css('background-color',color);
    });
});
// filters
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/filters',function(data2){
        var filters = `${data1.result[0].filters.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.filters').html('filters: ' + filters).css('background-color',color);
    });
});
// footprints
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/footprints',function(data2){
        var footprints = `${data1.result[0].footprints.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.footprints').html('footprints: ' + footprints).css('background-color',color);
    });
});
// HistoricSites
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/HistoricSites',function(data2){
        var HistoricSites = `${data1.result[0].HistoricSites.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.HistoricSites').html('HistSites: ' + HistoricSites).css('background-color',color);
    });
});
// MajorProjects
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/MajorProjects',function(data2){
        var MajorProjects = `${data1.result[0].MajorProjects.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.MajorProjects').html('MajorProj: ' + MajorProjects).css('background-color',color);
    });
});
// MapTips
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/MapTips',function(data2){
        var MapTips = `${data1.result[0].MapTips.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.MapTips').html('MapTips: ' + MapTips).css('background-color',color);
    });
});
// NSP
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/NSP',function(data2){
        var NSP = `${data1.result[0].NSP.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.NSP').html('NSP: ' + NSP).css('background-color',color);
    });
});
// Pavement
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/Pavement',function(data2){
        var Pavement = `${data1.result[0].Pavement.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.Pavement').html('Pavement: ' + Pavement).css('background-color',color);
    });
});
// PFNA
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/PFNA',function(data2){
        var PFNA = `${data1.result[0].PFNA.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.PFNA').html('PFNA: ' + PFNA).css('background-color',color);
    });
});
// PlannedLandUse
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/PlanedLandUse',function(data2){
        var PlannedLandUse = `${data1.result[0].PlanedLandUse.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.PlanedLandUse').html('PLU: ' + PlannedLandUse).css('background-color',color);
    });
});
// PointOfInterest
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/PointOfInterest',function(data2){
        var PointOfInterest = `${data1.result[0].PointOfInterest.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.PointOfInterest').html('POI: ' + PointOfInterest).css('background-color',color);
    });
});
// QueryLayer
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/QueryLayer',function(data2){
        var QueryLayer = `${data1.result[0].QueryLayer.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.QueryLayer').html('QueryLyr: ' + QueryLayer).css('background-color',color);
    });
});
// RightOfWay
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/RightOfWay',function(data2){
        var RightOfWay = `${data1.result[0].RightOfWay.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.RightOfWay').html('ROW: ' + RightOfWay).css('background-color',color);
    });
});
// RollClose
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/RollClose',function(data2){
        var RollClose = `${data1.result[0].RollClose.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.RollClose').html('RollClose: ' + RollClose).css('background-color',color);
    });
});
// Sales_view
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/Sales_view',function(data2){
        var Sales_view = `${data1.result[0].Sales_view.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.Sales_view').html('SalesVw: ' + Sales_view).css('background-color',color);
    });
});
// scl
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/scl',function(data2){
        var scl = `${data1.result[0].scl.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.scl').html('SCL: ' + scl).css('background-color',color);
    });
});
// SoilsGuideline
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/SoilsGuideline',function(data2){
        var SoilsGuideline = `${data1.result[0].SoilsGuideline.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.SoilsGuideline').html('Soils: ' + SoilsGuideline).css('background-color',color);
    });
});
// Transportation
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/Transportation',function(data2){
        var Transportation = `${data1.result[0].Transportation.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.Transportation').html('Transpt: ' + Transportation).css('background-color',color);
    });
});
// UseSeperation
$.getJSON('https://ccgisfiles01m:5000/status',function(data1){
    $.getJSON('https://ccgisfiles01m:5000/status/baseline/UseSeperation',function(data2){
        var UseSeperation = `${data1.result[0].UseSeperation.toFixed(2)}`;
        var base = `${data2.result[1].baseline_offset.toFixed(2)}`;
        if(base <= 0){var color = '#28a745';}
        else{var color = '#dc3545';}
        $('.UseSeperation').html('UseSep: ' + UseSeperation).css('background-color',color);
    });
});


//----------------------------------------------------------------------------------------------
// arcgis server hits chart - past 30 days of GISMO services hits

$.getJSON('https://ccgisfiles01m:5000/query/ags/GISMO/30',function(data){
   GISMO_30_data = data.result[1].ags_hits;
   ags_hit_chart();
});

function ags_hit_chart(){
    var ags_keys = Object.keys(GISMO_30_data);
    var ags_times = [];
    // Convert epoch to local time
    for(var i = 0; i<ags_keys.length;i++){
        time = ags_keys[i]*1000;
        time = moment(time).local().format('M-D')
        ags_times.push(time);
    };
    // GISMO hits
    var GISMO_ags_hits = Object.values(GISMO_30_data);
    var ctx = document.getElementById("ArcGIS-Server-30-Day-Hits").getContext('2d');
    var myChart = new Chart(ctx,{
        type: 'bar',
        data:{
            labels: ags_times,
            datasets:[{
                label: 'GISMO',
                data: GISMO_ags_hits,
                borderColor: '#00ccff',
                borderWidth: 2,
                backgroundColor: '#0066ff'
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    ticks:{
                        fontColor:'white',
                    },
                    gridLines:{
                        color:'#595959'
                    }
                }],
                xAxes:[{
                    ticks:{
                        fontColor:'white'
                    },
                    gridLines:{
                        color:'#595959'
                    }
                }]
            }
        }
    })
};

//----------------------------------------------------------------------------------------------
// arcgis server donut chart - current day stats
// arcgis server hits chart - past 30 days
// also grabs service hits for past 24 hours/30 minute intervals

// Set default values because sometimes the functions below do not load, causing the chart to fail
ab142_now = 0;
assMap_now = 0;
poi_now = 0;
queryLayer_now = 0;
scl_now = 0;

$.getJSON('https://ccgisfiles01m:5000/query/ags/AB142/24',function(data){
    ab142_ags_24_data = data.result[1].ags_hits;
    ab142_now = (Object.values(ab142_ags_24_data))[Object.values(ab142_ags_24_data).length - 1];
});
$.getJSON('https://ccgisfiles01m:5000/query/ags/AssessorMap/24',function(data){
    assMap_ags_24_data = data.result[1].ags_hits;
    assMap_now = (Object.values(assMap_ags_24_data))[Object.values(assMap_ags_24_data).length - 1];
});
$.getJSON('https://ccgisfiles01m:5000/query/ags/PointOfInterest/24',function(data){
    poi_ags_24_data = data.result[1].ags_hits;
    poi_now = (Object.values(poi_ags_24_data))[Object.values(poi_ags_24_data).length - 1];
});
$.getJSON('https://ccgisfiles01m:5000/query/ags/QueryLayer/24',function(data){
    queryLayer_ags_24_data = data.result[1].ags_hits;
    queryLayer_now = (Object.values(queryLayer_ags_24_data))[Object.values(queryLayer_ags_24_data).length - 1];
});
$.getJSON('https://ccgisfiles01m:5000/query/ags/scl/24',function(data){
    scl_ags_24_data = data.result[1].ags_hits;
    scl_now = (Object.values(scl_ags_24_data))[Object.values(scl_ags_24_data).length - 1];
    ags_donut_chart();
});
function ags_donut_chart(){
    total_now = ab142_now + assMap_now + poi_now + queryLayer_now + scl_now;
    data_timeframe = (Object.keys(ab142_ags_24_data))[Object.keys(ab142_ags_24_data).length - 1];
    timeframe = moment(data_timeframe*1000).local().format('LLL');
    $('.donut-title').html(total_now.toLocaleString() + ' Primary Service Hits for<br><small>' + timeframe + '</small>');
    var donut_hit_data = [];
    donut_hit_data.push(ab142_now,assMap_now,poi_now,queryLayer_now,scl_now);
    donut_chart_data = {
        datasets:[{
            data: donut_hit_data,
            backgroundColor:['#249cd8','#00bc9d','#bdc3c7','#9d58b1','#ec393b']
        }],
        labels:[
            'AB142','Assessor Map','Point of Interest','Query Layer','SCL'
        ]
    };
    // Construct donut chart
    var donutHitChart = new Chart(document.getElementById("donut-hit-chart"),{
        type: 'polarArea',
        data: donut_chart_data,
        options:{
            legend:{
                display: false
            },
            layout:{
                padding:{
                    top:10,
                    bottom:10
                }
            }
        }
    });
    $('.donut-hit-legend').html(
        '<span style="white-space:nowrap"><i class="fas fa-circle" style="color:#249cd8"></i>&nbspAB142:&nbsp' + ab142_now.toLocaleString() + '</span>   <span style="white-space:nowrap"><i class="fas fa-circle" style="color:#00bc9d"></i>&nbspAsMap:&nbsp' + assMap_now.toLocaleString() + '</span>   <span style="white-space:nowrap"><i class="fas fa-circle" style="color:#bdc3c7"></i>&nbspPOI:&nbsp' + poi_now.toLocaleString() + '</span>   <span style="white-space:nowrap"><i class="fas fa-circle" style="color:#9d58b1"></i>&nbspQueryLyr:&nbsp' + queryLayer_now.toLocaleString() + '</span>   <span style="white-space:nowrap"><i class="fas fa-circle" style="color:#ec393b"></i> SCL:&nbsp' + scl_now.toLocaleString() + '</span>'
    );
};

//----------------------------------------------------------------------------------------------
// Get list of stopped services
$.getJSON('https://ccgisfiles01m:5000/status/stopped',function(data){
    stopped_services = data.result[0].stopped;
    stopped_services_html = []
    services_monitor_time = data.result[1].time; 
    services_monitor_widget();
});
function services_monitor_widget(){
    if(stopped_services.length == 0){
        document.getElementById('services-monitor').innerHTML = ('<div class="alert alert-success" role="alert">All services are running!</div>');
    } else {
        for(i=0; i < stopped_services.length; i++) {
            stopped_services_html.push('<i class="text-danger">Stopped: </i><strong>' + (stopped_services[i].split("/arcgis/admin/services/"))[1] + '</strong><br><hr style="background-color: white">');
            document.getElementById('services-monitor').innerHTML = (stopped_services_html.join(""));
        };
    };
};

//----------------------------------------------------------------------------------------------
// Service Metrics
// Service Metrics Compiler Widget for OpenWeb/OpenDoor
$.getJSON('https://ccgisfiles01m:5000/query/odowMetrics/gui',function(data){
    odowGUItime = data.result[0].time;
    var metrics = data.result[1].metrics;
    guiSum = metrics.shift();
    odowGUIdata = [];
    odowGUIlabels = [];
    // make data array
    for(i=0; i < metrics.length; i++){
        odowGUIdata.push(metrics[i][1]);
    };
    // make labels array
    for(i=0; i < metrics.length; i++){
        odowGUIlabels.push(metrics[i][0]);
    };
    odowGuiChart();
});
function odowGuiChart(){
    odow_gui_chart_data = {
        datasets:[{
            data: odowGUIdata,
            backgroundColor:['#c0392b','#9b59b6','#2980b9','#1abc9c','#f1c40f','#95a5a6']
        }],
        labels:odowGUIlabels
    };
    $('.gui-chart-title').html('<h5>OpenDoor/OpenWeb GUI Metrics</h5><small>' + guiSum[1].toLocaleString() + ' Total Requests Today</small>');
    var radialChart = new Chart(document.getElementById('odow-gui-chart'),{
        data:odow_gui_chart_data,
        type:'doughnut',
        options:{
            legend:{
                display: true,
                position: 'bottom',
                labels:{
                    fontColor:'white'
                }

            },
            responsive: true,
            maintainAspectRatio: false,
            layout:{
                padding:{
                    top:10,
                    bottom:10
                }
            }
        }
    });
};

$.getJSON('https://ccgisfiles01m:5000/query/odowMetrics/service',function(data){
    odowServiceTime = data.result[0].time;
    var metrics = data.result[1].metrics;
    serviceSum = metrics.shift();
    odowServiceData = [];
    odowServiceLabels = [];
    // make data array
    for(i=0; i < metrics.length; i++){
        odowServiceData.push(metrics[i][1]);
    };
    // make labels array
    for(i=0; i < metrics.length; i++){
        odowServiceLabels.push(metrics[i][0]);
    };
    odowServiceChart();
});
function odowServiceChart(){
    odow_service_chart_data = {
        datasets:[{
            data: odowServiceData,
            backgroundColor:['#c0392b','#9b59b6','#2980b9','#1abc9c','#f1c40f','#95a5a6']
        }],
        labels:odowServiceLabels
    };
    $('.odow-service-title').html('<h5>OpenDoor/OpenWeb Service Metrics</h5><small>' + serviceSum[1].toLocaleString() + ' Total Requests Today</small>');
    var radialChart = new Chart(document.getElementById('odow-service-chart'),{
        data:odow_service_chart_data,
        type:'doughnut',
        options:{
            legend:{
                display: true,
                position: 'bottom',
                labels:{
                    fontColor: 'white'
                }

            },
            responsive: true,
            maintainAspectRatio: false,
            layout:{
                padding:{
                    top:10,
                    bottom:10
                }
            }
        }
    });
};



//----------------------------------------------------------------------------------------------
// arcgis online credits
$.getJSON('https://ccgisfiles01m:5000/status/ago',function(data){
    var credits = parseInt(`${data.result[0].credits}`);
    var agoDate = `${data.result[1].date}`;
    var agoTime = `${data.result[2].time}`;
    var creditsText = '<em>as of ' + agoTime + ' on ' + agoDate + '</em>';
    $('.ago_credits_text').html(creditsText);
    $('.ago_credits').html('<h1 class="display-3">' + credits.toLocaleString() + '</h1>')
});

//----------------------------------------------------------------------------------------------
// Service Now Stats
$.getJSON('https://ccgisfiles01m:5000/servicenow',function(data){
    snDate = data.result[0].date;
    snCS = data.result[1].customer_service;
    snDW = data.result[2].data_warehouse;
    snSCLFeat = data.result[3].scl_features;
    $('.sn-date').html('As of ' + snDate)
    $('.sn-cs').html(' ' + snCS + ' Incidents');
    $('.sn-dw').html(' ' + snDW + ' Incidents');
    $('.sn-scl-feat').html(' ' + snSCLFeat + ' Features');
});
//----------------------------------------------------------------------------------------------
// PTS Pie Chart
$.getJSON('https://ccgisfiles01m:5000/pts',function(data){
    edCount = data.result[0].ed_count;
    edSum = data.result[1].ed_sum;
    johnCount = data.result[2].john_count;
    johnSum = data.result[3].john_sum;
    leahCount = data.result[4].leah_count;
    leahSum = data.result[5].leah_sum;
    totalSum = edSum + johnSum + leahSum;
    ptsDate = data.result[6].date;
    ptsPieChart();
});
function ptsPieChart(){
    document.getElementById('pts-date').innerHTML = 'As of ' + ptsDate;
    var pieData = [];
    pieData.push(edSum,johnSum,leahSum);
    var pie_chart_data = {
        datasets:[{
            data: pieData,
            backgroundColor:['#4caf50','#337ab7','#d9534f']
        }],
        labels:[
            'Ed','John','Leah'
        ]
    };
    // Construct donut chart
    var pieChart = new Chart(document.getElementById("pts-pie-chart"),{
        type: 'pie',
        data: pie_chart_data,
        options:{
            legend:{
                display: false
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
    document.getElementById('leah-cs').innerHTML = '<i class="fa fa-circle" style="color:#ae423f"></i> Leah: $' + leahSum.toLocaleString();
    document.getElementById('ed-cs').innerHTML = '<i class="fa fa-circle" style="color:#4caf50"></i> Ed: $' + edSum.toLocaleString();
    document.getElementById('john-cs').innerHTML = '<i class="fa fa-circle" style="color:#249cd8"></i> John: $' + johnSum.toLocaleString();
};
//----------------------------------------------------------------------------------------------
// Server Job Error Badge
$.getJSON('https://ccgisfiles01m:5000/query/allserverjobs/descriptions',function(data){
    jobs = data.result;
    var errorNum = 0;
    for(i=0; i < jobs.length; i++){
        if(jobs[i].status == 'error'){
            errorNum++;
            $('.job-error-badge').html(errorNum);
        }else{
            $('.job-error-badge').html('');
        }
    };
});

