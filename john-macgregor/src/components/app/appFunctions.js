const functions = {
    footerText: () => {
        const year = new Date().getFullYear();
        return `${year} Johnathan MacGregor`;
    },
    headerText: () => {
        return 'John MacGregor - Home';
    }
}

export default functions;