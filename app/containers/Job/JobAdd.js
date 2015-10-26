/* jshint esnext: true */
import React from 'react';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
let Paper = mui.Paper;
let Slider = mui.Slider;
let Toggle = mui.Toggle;
let TextField = mui.TextField;

class JobAdd extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  render() {
    return (
      <div>
        <form>
          <TextField hintText="Job title"
                     floatingLabelText="Job Title" />
          <br />
          <TextField hintText="Job Description"
                     floatingLabelText="Job Description"
                     multiLine={true} rows={5} />
          <br />
          <TextField hintText="Required Skills" />
          <br />
          <Slider name="budget" />
          <br />
          <Toggle
            name="active"
            value="true"
            label="Active" />
        </form>
      </div>
    );
  }
}

JobAdd.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default JobAdd;
