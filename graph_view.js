var GraphView = React.createClass({
  mixins: [BackboneMixin],

  render: function() {
    return React.DOM.h1({}, this.props.model.get('title'));
  }
});
