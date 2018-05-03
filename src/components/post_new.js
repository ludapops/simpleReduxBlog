import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  static renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label htmlFor={field.id}>{field.label}</label>
        <input
          className="form-control"
          type="text"
          id={field.id}
          {...field.input}
        />
        <div className="text-help">

          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(this, this.props, values);
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }


  render() {
    const { handleSubmit } = this.props; // dont really rememeber whats going on with handleSubmit
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            id="title"
            component={PostsNew.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            id="categories"
            component={PostsNew.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            id="content"
            component={PostsNew.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">
                  Cancel
          </Link>

        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters long!';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }
  if (!values.content) {
    errors.content = 'Enter some content!';
  }

  return errors;
}


export default reduxForm({
  validate,
  form: 'PostNewForm',
})(
  connect(null, { createPost })(PostsNew),
);
