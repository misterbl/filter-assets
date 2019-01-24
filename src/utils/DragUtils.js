export const source = {
    beginDrag(props) {
        return props;
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }
    }
};

export const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
    };
}
