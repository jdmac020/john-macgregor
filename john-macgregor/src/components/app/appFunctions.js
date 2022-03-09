const functions = {
    footerText: () => {
        const year = new Date().getFullYear();
        return `${year} Johnathan MacGregor`;
    },
    headerText: () => {
        return 'Home';
    }
}

export default functions;