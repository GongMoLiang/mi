// react hook函数的学习


import React, { Component, useState , useEffect } from 'react'
import { Button } from 'antd'

export default class Add extends Component{
    state = {
        age: 18
    }
   
    render(){
        const { age } = this.state
        return (
           
            <div>
                 <p>hoos函数的使用</p>
                 <p>{ age }</p>
                 <Hello></Hello>
                 <World></World>
            </div>
        )
    }
}


// useSeate的使用  作用就是让函数组件可以使用state
const Hello = ()=>{

    // 定义一个state数据, useState可以赋值一个初始值
    const [name, setName] = useState('张三')
    // setName为修改state数据的函数
   return <div>
        <p>{ name }</p>
        <Button type="primary" 
              onClick = { ()=>{ setName('二狗') }}
        > 点我修改名字</Button>
   </div>
}

// useEffect  让函数式组件具有生命周期

/* 
*  默认会在 componetDidMount 与 compontDidUpdate 的时候会执行
*
*/

const World = ()=>{
      useEffect(()=>{
          console.log(1)

          return ()=>{

          }
      })
     
     return (
         <div>
           World
         </div>
     )
}


