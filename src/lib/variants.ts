export const fadeIn = (direction: string, delay: number) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? 80 : 0,
            x: direction === 'left' ? 80 : direction === 'right' ? 80 : 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    }
}

export const fadeInItem = (direction: string, delay: number) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? 40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? 40 : 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.75],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1,
                delay: delay,
                ease: [0.83, 0, 0.17, 1],
            },
        },
    }
}