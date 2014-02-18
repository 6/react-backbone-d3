var GraphView = React.createClass({
  render: function() {
    return React.DOM.h1({}, this.props.model.get('title'));
  }
});
