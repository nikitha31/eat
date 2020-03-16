$(document).ready(function () {
    $('.box').toggleClass("open-more");
    $(".icon").click(function () {
        $('.box').toggleClass("open-more");
        $(this).toggleClass("button");
    });
});

//this function is called on page load which prints the events dynamically

function PrintEvents() {
    var x = document.createElement("UL");
    x.setAttribute("id", "myUL");
    x.setAttribute("class", "nav nav-link flex-column list-group-flush");
    x.setAttribute("style", "overflow-y: auto");

    document.getElementById("EventsList").appendChild(x);
    // a is a list of events,should send this from BL
    var a = ["Event1", "Event2", "Event3"];
    for (i = 0, u = 0; i <= 2; i++ , u++) {
        var y = document.createElement("li");
        var u = 23;
        //call showInChart() with events.presentess and events.registered students and this
        if (i == 0)
            y.setAttribute("onclick", `showInChart(10,80,this)`);
        if (i == 1)
            y.setAttribute("onclick", `showInChart(40,20,this)`);
        if (i == 2)
            y.setAttribute("onclick", `showInChart(20,80,this)`);
        var t = document.createTextNode(a[i]);
        y.setAttribute("class", "list-group-item");
        y.setAttribute("id", 'list-group-itemID');
        y.setAttribute("name", a[i]);
        y.appendChild(t);
        document.getElementById("myUL").appendChild(y);
    }
}

//for google charts
function showInChart(i, j, ctrl) {
    //to highlight the selected event.
    var list = document.getElementById("myUL").getElementsByTagName('li');
    for (p = 0; p < list.length; p++) {
        list[p].style.background = 'white';
    }
    ctrl.style.background = '#76CDD8';
    // pie chart code starts here.
    google.charts.load("current", {
        packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Registered Students', 'Attended Students'],
            [' Registered', i],
            [' Attended', j],
        ]);
        var options = {
            title: 'Event Details',
            is3D: true,
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
        //histogram code starts here.
        var data1 = google.visualization.arrayToDataTable([
            ['Registered Students', 'Attended Students'],
            [' Event1', 0.2],
            [' Event2', 0.6],
            [' Event3', 0.3],
        ]);
        var options1 = {
            title: 'Each Event-Student Comparison',
            legend: {
                position: 'none'
            },
        };
        var chart1 = new google.visualization.Histogram(document.getElementById('chart_div'));
        chart1.draw(data1, options1);
    }
}
