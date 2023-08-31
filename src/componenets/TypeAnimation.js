import { TypeAnimation } from "react-type-animation";

export default function IntroType()  {
return(
    <TypeAnimation
    sequence={[
        "Full Stack Web Dev",
        1500,
        "Content Marketer",
        1500,
        "Creative Writer",
        1500,
        "Your next great hire",
        5000,
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
    style={{fontSize:"25px"}}
    
    
    
    
    />
)
}