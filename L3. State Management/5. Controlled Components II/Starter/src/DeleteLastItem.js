const DeleteLastItem = ({items, onDeleteLastItem}) => {

    const noItemsFound = () => items.length === 0;

    return (
        <button onClick={onDeleteLastItem} disabled={noItemsFound()}>
            Delete Last Item
        </button>
    )
}

export default DeleteLastItem;