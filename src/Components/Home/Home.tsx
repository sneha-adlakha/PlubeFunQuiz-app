import {
    Box, CircularProgress, Typography, Grid,
    Card, Button, CardActionArea, CardActions, CardContent, Container, CardMedia
} from "@material-ui/core";
import { useEffect, useState } from 'react';
import { ServerRequest } from "./ServerRequest"
import { QuizCategory } from "./Home.types";
import { homepageStyle } from "./home-style";
import homepage from "../../assets/hero.svg";

import {useNavigate} from "react-router-dom";

function Home() {
    const [quizCategories, setquizCategories] = useState<Array<QuizCategory>>([]);
    const [isloading, setIsLoading] = useState<Boolean>(false);
    const classes = homepageStyle();
    const navigate=useNavigate();

    useEffect(() => {
        (async function () {
            setIsLoading(false);
            const quizCategories = await ServerRequest();
            console.log(quizCategories);
            if ("quizCategory" in quizCategories) {
                setquizCategories(quizCategories.quizCategory);
            }
            else {

            }
            setIsLoading(false);
        })();
    }, []);
    const play=(quizCategoryId:string)=>{
        navigate("/play",{
        state:{
            quizCategoryId:quizCategoryId
        },
    });
    };

    return (
        <>
            {isloading ? (
                <Box display="flex" justifyContent="center" p={4}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Box className={classes.herocontainer}>
                        <img className={classes.image}  alt="heroimage"/>
                    </Box>
                    <Container maxWidth="md" className={classes.homecontainer}>
                        <Grid container spacing={3}>
                            {quizCategories.map((quizCategory, index) => (
                                <Grid key={quizCategory._id} item xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="quizcard"
                                                height="140"
                                                image={homepage}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                   {quizCategory.name}
          </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
          </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button onClick={()=>play(quizCategory._id)} fullWidth={true} size="large" color="primary">
                                                Play Now
                                            </Button>
                                        </CardActions>
                                    </Card>

                                </Grid>

                            ))}

                        </Grid>
                    </Container>
                </>)}
        </>
    );
}
export default Home;