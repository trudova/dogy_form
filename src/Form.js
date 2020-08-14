import React, { Component } from 'react'

export default class Form extends Component {
state={
    firstName:'',
    lastName:'',
    age:'',
    gender:'',
    weight:'',
    info:[]
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
    const age= this.state.age;
    const gender= this.state.gender;
    const weight= this.state.lastName;
    if(firstName.length>0 && lastName.length>0 && age.length>0 && gender.length>0 && weight.length>0){
        const dog=`${firstName} ${lastName} ${age} ${gender} ${weight}.`;
        this.setState({
            info:[...this.state.info, dog],
            firstName:'',
            lastName:'',
            age:'',
            gender:'',
            weight:''
        })
    }
}

    render() {
        return (
          <section>
              <article>
<form onSubmit={this.handleSubmit}>
   <label for='firstName'>Neme of the dog:</label>
    <input type='text'
     name='firstName'
      value={this.state.firstName} 
      onChange={this.handleChange}/>
<label for='lastName'>Type of the dog:</label>
    <input type='text'
     name='lastName'
     value={this.state.lastName} 
      onChange={this.handleChange}/>

<label for='age'>Neme of the dog:</label>
    <input type='text'
     name='age'
      value={this.state.age} 
      onChange={this.handleChange}/>

      <label for='gender'>Neme of the dog:</label>
    <input type='text'
     name='gender'
      value={this.state.gender} 
      onChange={this.handleChange}/>

<label for='weight'>Neme of the dog:</label>
    <input type='text'
     name='weight'
      value={this.state.weight} 
      onChange={this.handleChange}/>

    <button type='submit'>submit</button>
</form>
              </article>

              <article className='list'>
                  <h1 className='list'> Information about your dog</h1>
                  <div>
                {this.state.info}
                  </div>
              </article>
          </section>   
        )
    }
}
