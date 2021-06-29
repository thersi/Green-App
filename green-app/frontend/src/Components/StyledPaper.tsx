import { createMuiTheme, styled } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const theme = createMuiTheme();

const MyPaper = styled(Paper) ({
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
});

export default function StyledComponents() {
    return <MyPaper />;
}