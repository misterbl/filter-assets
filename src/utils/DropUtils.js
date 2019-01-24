export const target = {
    canDrop(props, monitor) {
        const item = monitor.getItem();
        return item
    },
};

export const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        didDrop: monitor.didDrop(),
        item: monitor.getItem(),
    };
}