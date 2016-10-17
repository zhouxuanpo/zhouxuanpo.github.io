import React, { Component } from 'react';
import echarts from 'echarts';

class EchartSkill extends Component {
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            color: ['#3398DB'],
               tooltip : {
                   trigger: 'axis',
                   axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                       type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                   }
               },
               grid: {
                   left: '3%',
                   right: '4%',
                   bottom: '3%',
                   containLabel: true
               },
               xAxis : [
                   {
                       type : 'category',
                       data : ['HTML', 'CSS', 'Javascript', 'Jquery', 'React', 'Ajax', 'Bootstrap'],
                       axisTick: {
                           alignWithLabel: true
                       }
                   }
               ],
               yAxis : [
                   {
                       type : 'value'
                   }
               ],
               series : [
                   {
                       name:'熟练度',
                       type:'bar',
                       barWidth: '60%',
                       data:[380, 350, 330, 355, 345, 330, 375]
                   }
               ]
        });
    }
    render() {
        let styles={
            main:{
                width:'60%',
                height:'400px',
                marginTop:'100px',
                margin: '0 auto',
            },
            h2:{
                textAlign:'center',
                marginTop:'40px',
                color:'rgb(100, 202, 212)',
            }
        }

        return (
            <div >
                <h2 style={styles.h2}>我的个人技能图</h2>
                <div id="main" style={styles.main}>
                </div>
            </div>
        )
    }
}

export default EchartSkill;
