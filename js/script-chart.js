Highcharts.setOptions({
    colors: ['#563d7c']
});   

Highcharts.chart('chartPeso', {
    chart: {
        type: 'line',
        backgroundColor: '#9EDCBF'
    },
    exporting: {
        buttons: {
            contextButton: {
                symbolStroke: "#563d7c",
                theme: {
        fill:"#9EDCBF"
    }
            }
        }
    },
    title: {
        text: 'Registro de Peso'
    },
    xAxis: {
        categories: [
            'Jul/2018',
            'Ago/2018',
            'Set/2018',
            'Out/2018',
            'Nov/2018',
            'Dez/2018',
            'Jan/2019',
            'Fev/2019',
            'Mar/2019',
            'Abr/2019',
            'Mai/2019',
            'Jun/2019'
        ],
        crosshair: true
    },
    yAxis: {
        min: 70,
        title: {
            text: 'Peso (kg)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} kg</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Peso(kg)',
        data: [83, 82.4, 81, 80, 79.4, 78.4, 77.6, 77, 77.4, 77, 76.6, 75.9]

    }]
});