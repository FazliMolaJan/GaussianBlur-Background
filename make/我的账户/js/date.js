/**
 * Created by company on 2016/10/10.
 */
//ʱ��ؼ�
$(function(){
    laydate({
        elem: '#starTime',
        format: 'YYYY/MM/DD',
        festival: true,
        choose: function(datas){
        }
    });
    laydate({
        elem: '#endTime',
        format: 'YYYY/MM/DD',
        festival: true,
        choose: function(datas){
        }
    });
    laydate({
        elem: '#starTime1',
        format: 'YYYY/MM/DD',
        festival: true,
        choose: function(datas){
        }
    });
    laydate({
        elem: '#endTime1',
        format: 'YYYY/MM/DD',
        festival: true,
        choose: function(datas){
        }
    });
})