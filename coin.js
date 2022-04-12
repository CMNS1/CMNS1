window.setTimeout("waktu()", 1000);
function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    document.getElementById("jam").innerHTML = tanggal.getHours();
    document.getElementById("menit").innerHTML = tanggal.getMinutes();
    document.getElementById("detik").innerHTML = tanggal.getSeconds();
}
var reloadData; // dalam detik

var timer;

function updateDataAPI() {

    $.ajax({
        url: 'https://indodax.com/api/summaries',
        success: function (data) {
            var row;

            $('#coins').html('<tr><th>Pairs</th><th>Harga</th> <th>Beli</th> <th>jual</th> <th>Tertinggi 24h</th><th>Terendah 24h</th><th>Vol IDR</th></tr>')
            for (var key in data.tickers) {
                row = `<tr>
              <td>` + key.toUpperCase() + `</td>
              <td>` + formatNumber(data.tickers[key].last) + `</td>
              <td>` + formatNumber(data.tickers[key].buy) + `</td>
              <td>` + formatNumber(data.tickers[key].sell) + `</td>
              <td>` + formatNumber(data.tickers[key].high) + `</td>
              <td>` + formatNumber(data.tickers[key].low) + `</td>
							<td>` + formatNumber(data.tickers[key].vol_idr) + `</td>
							 </tr>`
                $('#coins tr:last').after(row);
            }

            clearTimeout(timer)
            $('#timer').html(reloadData)
            setTimeout(updateDataAPI, reloadData * 1000)
            updateTimer()
        },
        error: function (err) {
            alert("Tidak bisa mengambil data API")
        }
    })
}

function formatNumber(n) {
    if (n.indexOf('.') > -1)
        return parseFloat(n).toFixed(8);
    else
        return parseInt(n).toLocaleString("id-ID")
}

function updateTimer() {
    a = parseInt($('#timer').html())
    $('#timer').html(a - 1)
    if (a > 0)
        timer = setTimeout(updateTimer, 1000)
}
updateDataAPI()
