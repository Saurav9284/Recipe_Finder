import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {

    return (
        <div className="recipelist">
        <Container>
            <Header 
                size="large"
                content={`Recipe List For ${searchedQuery}`}
                textAlign='center'
                color="green"
            />
            <Grid columns={4} doubling>
                { 
                    recipes && recipes.map(recipe => (
                        <Grid.Column>
                            <RecipeListItem recipe={recipe} />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Container>
        </div>
    )
}

export default RecipeList;