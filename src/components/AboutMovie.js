import React from 'react';

const AboutMovie = () => {
return (
    <div>
        <img src="https://www.coverwhiz.com/uploads/movies/Guardians-Of-The-Galaxy.jpg" width="300" height='400'/>
        <h1>Guardians Of The Galaxy</h1>
        <h2 class="img_section_final_title_two">Released July 31, 2014</h2>
            <p class="img_section_final_p_one">Action/Sci-fi/Adventure,Comedy | Chirs Pratt, Zoe Saldana, Dave Bautista, James Gunn</p>
            <p class="img_section_final_p_two">A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
        <article for="Email">Leave a comment:</article> 
        <input type="text" class="final_comment" id="final_comment_sec"></input>
        <input type="button" value="Login" class="comment_btn" id="final_comment_btn"></input>
    </div>

)};

export default AboutMovie;