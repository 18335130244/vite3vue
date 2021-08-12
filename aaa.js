const axios = require('axios');
var headers = {Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjQwYmY5ODcyZTViMGU0MTBhZWY4N2MiLCJhdWQiOiJqb2JhZG1pbiJ9.ci5br1BL60I4BCbt-ltGMlCWQFu8o_I3Sik0q2BnRUk'};
console.time('year');
console.log('11',)
function year(createTime){
    axios({
        url:'https://test-ehr-api.ambow.com/job/teacherstudentbasicresult/findpage',
        method:'get',
        headers:headers,
        params:{
            tgt:headers.Authorization,
            createTime:createTime ,
            page:'1' ,
            rows:'10000' ,
            searchName:'' ,
            teacherId:'116' ,
        }
    })
        .then(response => {
            var a =response.data.data.list;
            var index = a.length - 1;
            function re(i) {
                var item = a[i]
                axios({
                    method: 'get',
                    headers:headers,
                    url: 'https://test-ehr-api.ambow.com/job/teacherstudentpayvisit/view',
                    params:{
                        tgt:headers.Authorization,
                        studentBasicResultId:item.studentBasicResultId,
                    }
                }).then(res=>{
                    console.log('\x1b[33m%s\x1b[0m',`${createTime}-操作数${i}/${index}-${item.name}`,`${item.schoolName}-成功`);
                    if(i < index){
                        re(++i)
                    }else{
                        year(--createTime)
                    }
                })
            }
            if(a.length > 0){
                re(0)
            }else{
                console.timeEnd('year');
            }
        })
        .catch(error => {
            console.log(error);
        });
}
year(21)
