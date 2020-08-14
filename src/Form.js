import React, { Component } from 'react'

export default class Form extends Component {
state={
    firstName:'',
    lastName:'',
    people:[]
}
handleChange = (event)=>{
    const value =event.target.value
this.setState({
    [event.target.name]:value
})
}
handleSubmit=(e)=>{
    e.preventDefault();
    const firstName=this.state.firstName;
    const lastName= this.state.lastName;
    if(firstName.length>0 && lastName.length>0){
        const person=`${firstName} ${lastName} .`;
        this.setState({
            people:[...this.state.people, person],
            firstName:'',
            lastName:''
        })
    }
}

    render() {
        return (
          <section>
              <article>
<form onSubmit={this.handleSubmit}>
    <input type='text'
     name='firstName'
      value={this.state.firstName} 
      onChange={this.handleChange}/>

    <input type='text'
     name='lastName'
     value={this.state.lastName} 
      onChange={this.handleChange}/>
    <button type='submit'>submit</button>
</form>
              </article>

              <article>
                  <h1> Information about your dog</h1>
                  <div>
                {this.state.people}
                  </div>
              </article>
          </section>   
        )
    }
}
