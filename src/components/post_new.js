import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  static renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          id="title"
          {...field.input}
        />
      </div>
    );
  }


  render() {
    return (
      <div>
        <form >
          <Field
            label="Title"
            name="title"
            component={PostsNew.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={PostsNew.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={PostsNew.renderField}
          />


        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm',
})(PostsNew);
