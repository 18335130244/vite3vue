const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://datachart.500.com/ssq/zoushi/newinc/jbzs_redblue.php?expect=100')
    .then(response => {
        const $ = cheerio.load(response.data);
        var data = $('#tdata').find('tr');
        for(var i = data.length ; i > 0 ; i --){
            var td2 = $(data).eq(i).find('.chartBall02');
            var td1 = $(data).eq(i).find('td').eq(0);
            if(td2.html()==null){
                continue;
            }
            var td = $(data).eq(i).find('.chartBall01');
            var str = `期数:${$(td1).html()}--红球:`;
            for(var j = 0 ; j < td.length ; j ++){
                str += `${j?'、':''}${$(td).eq(j).html()}`
            }
            str += `--蓝球:${$(td2).html()}`
            console.log(str);
        }
    })
    .catch(error => {
        console.log(error);
    });
