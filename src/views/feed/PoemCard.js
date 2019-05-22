import React, { useState } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import dateFormat from 'dateformat';

import { like, dislike } from '../../store/actions';

function PoemCard(props) {
    const [title, setTitle] = useState(props.poem.poemTitle);
    const [poet, setPoet] = useState(props.poem.username);
    const [likes, setLikes] = useState(props.poem.likes);
    const [liked, setLiked] = useState(false);
    const [text, setText] = useState(props.poem.poem);
    const [comments, setComments] = useState(props.poem.comments);
    const [poemDate, setPoemDate] = useState(props.poem.created_at);

    const handleLike = () => {
        if (liked) {
            props.dislike({ ...props.poem, likes: likes - 1 });
            setLikes(likes - 1);

        } else {
            props.like({ ...props.poem, likes: likes + 1 });
            setLikes(likes + 1);
        }
        setLiked(!liked);
    }

    return (
        <div className="poem-post-container">
            <div className="poem-stamp">
                <div className="container-left">
                    <img className="avatar" src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1310&q=80" alt="user picture" />

                    <div className="stamp-text">
                        <p className="stamp-text-item author" >{poet}</p>
                        <p className="stamp-text-item" >{
                            dateFormat(poemDate, 'mediumDate')
                        }</p>

                    </div>

                </div>


                <img className="post-menu" src="https://img.icons8.com/small/90/000000/menu-2.png" />

            </div>
            <div className="poem">
                <h2 className="poem-title">{title}</h2>
                <p className="card-poem" >{text}</p>
            </div>

            <div className="poem-stats">
                <div className="stats-left">
                    <img onClick={() => handleLike()} className="stats-item upvote-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGfQAABn0BoBVGiAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA0pSURBVHic7Zx9eFTllcB/586EEDJBCZVMYtHddtdtZXfblaIlTNgsrqHkw5UtsS1trUkI6WrV1Wdb3H6sH2vZus/TVi2yYCCU2hUlWguTQLUsD00mIK50V12pfdxdP8CZAYUi+SCSmXv2j0AbkjuZ985HTLvz+/Oe855z5uTmve973nMv5MiRI0eOHDly5MiRI0eOHDly/O4g2TSulZXe8PT4FZZypah+VOFSYNYIlT7gpMLzovxcsJ/yd+79r0z4jlYv/BP1xBerLZeJ8KfAdMA3QuUIwkGQ5y1bds3qt56VPXtimfDtRFYSHakrnydYK1Tlk6AzXQ1WDiKy+bRq68WdoV+5GXpo8fxir9fTjHA98CFXfuFtUZ5Qy95YGtz77y7HJiWjiY7Ulc9D5VsgizJgrl9F77feLVztf/rp/vEUo1VVhfaUga8L3AxMS9exwi5EVpUFu3+erq2zZCTR4bq500Sn3Qt6A2BlwuYI3hCk0d/R/W9OwiNXL7jKtqUNeH+G/cYVHowXxG+f3b7vVLrG0k50uGbhh0XsdmBOurbGwRZYXdIR+gcBBdA7sSLPVdwj6O1k81kjvGiL1l+4veeX6ZlJg3BdICDQgXJeOnZMUdVtWIPL82SqJ2ZLO7B4IvwKnIhbUnvh9u6eNGykxvB8bO1i+Gk+YYjSYwsiUD6RfoGTqiwq6wwdSGVwSok+XB24xGPRA7wvlfG/xbzlseLls7bv+2+3A10/uI4tuWK6xyLI/78kA1wQtz0/jlZVFbod6HU74LTXew/KJW7HjYvqa4j1gqKvijA4fA2fKsUiLAAuGne8MCQ2zyIcVOEkMLzxsLUEiw+gMg8oyFC0c8g/dQ9wq5tBrqaOcF3FZaL6LOBxMy4BhxDZ4FHZMquj65XxFI8sKf+gWlaDCiuAkjOXFWEPKmtVBnaUBQ8MJBr/amXl1KmF8Sux9Asof52B+GMWfKykI/S86QBXiY7UBn5C+k/64wjfOD71VxvmtL902s3AQ/XzC/IGPbfYypUete4o6eza69b50dqFf2hj36uw1O3Yc5EdpR3dNcbapopn7uaUnrgjCFnW0LKS7fuPpGknbaJ1gc+osoHUd5JqwZ+Z3tXmD0O1/ybFgIYR7vUXlFZOhiQD+IOhLWJbHwdeTdGEqGKcE6M7+pUlS/KLPL1RhfNTCklZW9oZujGlsVkmXF1+sVjWfn4z97tAjvkjA6Vy4MBQMk2jVUeRpy+QcpKhwz8vdBOd4yv1rmu71BLK1dIZqFqCHFex9/uam18wcaLr1087Jd7FcZXZInaBqnUK0TcHPTx9QVNTb6JxZTv2vh6uq6gW1W5cTyM6M1JSOB/oSqZpdEdH6iruRvUb7oIA4HBsKP6R2U/tO+4kVFXpa22rF7iD4Vq1EwdV5G7fioatIqKjhX0PbvJLnn5N0UacEzUItHs09vWClpY3EgUaqQ3cCKxJ/pNGIXJHabD77mRqZnO08hHXAQCi8uVEST6xdu2M/ta2nwg8RuIkA1wqqo/2t256qu/BTf6Rgt71G+rJ04OKfonEd+NU4PNx8b7c99DG6xM58ReUrgNeGvcHOSCqHzXRM3wYqusNisLzJZ3djznJ+lpbS7ze/GeAKhcWryLP/tlAW9tsgN6HNtwgIo+BzjA0UABs6l+/0fE/U9rb4yLcbh7Pmagw27yZrjpmJVc5FxG572xJcyT6wAP5qLUNwwBHcYnGdHfvQxtvEmQNKdRqVLirr7Xtc04yfzDUgfCiS5NGuTFNtC+5yjkMesV+wknQn++7BbjCpb1fo/AHAg+QeuVRUF1zcs1mxyM2Ud3i0l6RiVKmT0OGEfZdsL1nzJNet26dgqVfyYpPd5wnebGbnAS2ytMubRn9wU0TfdKVa8XxcHPgnf6/RHF3WJslRPiU0/XSaaX/CbzrwtQ7JkqmiX7dhWNExLFIpKoL3djJMh/q/ZcfjJlfpb09DvyvCzuvmSiZJvqgC8fYqsccBcJsN3ayjSVDicqvzvE7oWqUG8N1tDqeQI9j1LERRdV2XTDPJrbHTvCQV+OqomIZ5cYo0WrldQK2sXPV4gTuoqY2JgJVDTtLxPT0KB6PxXaYKBoluiy4523gPwydA+J3vKzupqAs0190/vmvJZA5xz+WA4l2vqMxXt6J8LipLhZznS4rrpdOWUR/JtdeO2aKePOvFs7GeIMmxjkxTrSNdwNg1rGjfNzp8vSWhpfBeek30Sg87HTdsuPzDU0MxIZiG039GSd6ePqQzYbqsyO1FZc7CUTlIVOfWeSob3DgSUeJLZ80tLHJdNoAlztDsWUtDvULZ2W91unyNIY2C/o/bvxmHl0tN988ZlNytL7Sh2ByDqiq1oNuPLpKtH9H14uqPGqkrDQcra8cs3ySlpYhFUlav80ayqHCPM96J5E9GGsETJagPyzr7PqFG7euax227f0KkPBofwTFsYGhFU4CX3PTD1AJuvWdAWzbsj4rDQ2DowVaWelVW016NfpjxP/erWPXiX7/zj2HEb5noisitx6qn+/YuKJ5NAETfVB73/Tmhm4nQdQXW47I7yUzoMgDszv2venWcUrVuymxodWAyebjIs+g5zYnQVFj41si0pKK/xR5oXCw/6tOgmhVVaHA6qQWhEieZf9TKs5TSvTMnftPisgXTXRFWXVmbTqGwubGbcD3U4nBJYNi0+T0AASw8/u/qnBhMiMCK53KvyakXI/2B7u3CbQaqBZZ8fj3NUHdtlBjK4HdqcZhgK1if7bwi03POQnDNYG5orIquRlZ5w+GOlINIq3C/5TBqV8GDiXXlEXR2sDnHSUtLUNxS+uBcfvvUkXQO4qam3/kJHupfs4UEdaTvBfv9Snx0wZ/jMSklejiXbveEbGuB+IG6mujNeV/7CQ4b8WK47aHOhBXb2EZ8PC05qZvJhIWD8z4LjiXC0YQU9u6bubO/e4OP0aR9lGWP9i1G+VrBqqFKlbH4aWXO56wTG9q+qUKyzDd5idnd2FfUYtTLwhAtCbQiHBDMiMKq8p2dCVtkElGRs4M/Z2hfxZw3tKey8We2JTNeqez36Lmxt22UgWM+7qbATsLB/ur5bZrHf9o4ZrAXBUMdnb6RGlH6LtpxgJkKNECaot3JSbztVITORBIuOCf3tIUQuylwJhNhWE0ewo1tizRCuPw0stnivAIw40148Spr8WG7JVOLROpkLFT8LLgnrdV5BqGXzseF1H+MVIbaEgk9zU3/1REPo27Q1IU9g7lyVJpaXHcuUarqgo9Q1M6SN5T0muJXOOmaJSMjLYbnHnTtA5IdhQkwIZIbcWyRAqFzY3bbLGuwvAEXuHHvsH+RTMaGk44yV9ZsiRf8weC4FzCHcG7alu1brr5Tch4X0dpR2gPKn9r5ls3H6ktT1j/nd7c0G0rNYBj8s6i6DZfnvWZRNOFgvi8fetR/iJZUIrclImH32iy9sZppDZwL5C8WUZ4R9BP+IM9zyRSGWxr+0BsSHcg/NFomSp3+VY23pVodaF3Yh15LrBOoTlZKCq6uizYY7KCck1WPyMRqQ18G3CsdYxiwLL0mpLtPT9NpNDX2lpypmfvbDtZDFjlW9n0nURjdO7cvKi/4IcIjrXxcxC+XRoM/Z1BrCmR3e911Nd7ogORR4x+KPSLWFf7g10Jt+O6davn1Ineq230Ils9T505GnPWraz0RnyxzQLLk8apbCmdF/qc3Gl+0u+WrCYahre5xaeKnwStNlB/V1Su93d2mx0uJOCtqxcUxVS2onwiqbLQ6Q+fWmryekQ6ZKfJcQRz2l86fbzg+FJQx+7SUeSr6JZIXeBbiYpQyQhXl18ci8szRkmGxyciyTABd/RZtL7eEz0V2QQ4FpfGILLZHx5odpOEcF3FZYJ2oJQa2Z/qbzrTa5d1JizRMDxvRn2xh4FPGw7pOK1cZ/LJn3BNxWJL9FGTl5oUHint834hm99QGs2EJhp+fWe3AdcZDomCfjN/sODh4l27xrTIhmsCcy2RWxVdjtnv2eQvKG2eqDv5LBOeaHC3th3BaYUuEf0FyMDwC/VSgfJBcxOyzv+x7huzubpI6HmiHZ5FQaJ1C+5HxbHzPtOIyH0lwe7bMlUkcu3/vXA6kmht4BaF75C9FVBMkRvKOrpNjt2yxnueaIBwXcU1ovqvZOBTaqMYEJHl/mD3tgzbdc2kSDTAcK+eBknhVbsEHEHsumx8LDAVJk2iAaJ1C39f1d6B+68wjuZlEavaH+xK9csFGSfrO0M3+INdr1rWUCXC/jTMPCN59p9PpiTDJEs0QMn2/Uf8vd4Aw2/GukP0e/4+b4X/yb1HsxBaWkyqqWM04ZrASrFYg5I3rqIwpDZfKusMTYbea0cmdaIBIrULqhF5JNHXIgVOqOjy0mDPzomOzQ2TPtEA4brARaLyOOi8UaJnbY+17MJtXQbdUu8tk26OdqIsGHrDU+BZpHA/yDGQYyJyn5yetui3Ick5cuTIkSNHjhw5cuTIkSNHjhy/a/wfYCagss1I7AQAAAAASUVORK5CYII=">
                    </img>
                    <p className="stats-item likes-count">{likes}</p>

                </div>
                <div className="stats-right">
                    <p className="stats-item">Comments: {comments.length}</p>
                </div>

            </div>
            {comments.length < 1 ? null :
                <div className="comments-container">
                    {comments.map(comment => {
                        return <Comment comment={comment} />
                    })}
                    <div className="comment">
                        <p>slkdflksjdflhsldhflsj
                            lskdjflksjdlfkjsdf <br /><br />
                            slkdjflksjdlfkjsd
                            slkdjflksjdlfkjsd</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default connect(null, { like, dislike })(PoemCard);