import { ButtonGroup, Button, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const QuantitySelectionButton = ({
    quantitySelected,
    countInStock,
    setQuantitySelected,
    ...props
}) => {
    return (
        <ButtonGroup>
            <Button
                size="small"
                onClick={() => {
                    setQuantitySelected(Math.max(quantitySelected - 1, 1));
                }}
            >
                <RemoveIcon fontSize="small" />
            </Button>
            <Button
                {...props}
                size="medium"
                disableRipple={true}
                disableFocusRipple={true}
                style={{ backgroundColor: "transparent" }}
            >
                {quantitySelected}
            </Button>
            <Button
                size="small"
                onClick={() => {
                    setQuantitySelected(
                        Math.min(quantitySelected + 1, countInStock)
                    );
                }}
            >
                <AddIcon fontSize="small" />
            </Button>
        </ButtonGroup>
    );
};

export default QuantitySelectionButton;
