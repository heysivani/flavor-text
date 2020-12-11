class flavor {

    loud(text) {
        return text.toUpperCase();
    }

    soft(text) {
        return text.toLowerCase();
    }

    wavy(text) {
        let flavored = `~${text}~`;
        return flavored; 
    }

    spacy(text) {
        let flavored = text.split('').join(' ');
        return flavored; 
    }

    period(text) {
        let flavored = text.split(' ').join('. ');
        return flavored + "."; 
    }

    trailing(text) {
        let flavored = text.split(' ').join('... ');
        return flavored + "..."; 
    }

    
}

module.exports = flavor;