/* jshint esnext: true */
import React from 'react';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
let Paper = mui.Paper;
let Card = mui.Card;
let Avatar = mui.Avatar;
let FlatButton = mui.FlatButton;
let CardHeader = mui.CardHeader;
let CardText = mui.CardText;
let CardActions = mui.CardActions;

class Home extends React.Component {
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
        <Card initiallyExpanded={true} zDepth={null}>
          <CardHeader
            title="Title"
            subtitle="Subtitle"
            avatar={<Avatar style={{color:'red'}}>A</Avatar>}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions expandable={true}>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

Home.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default Home;
