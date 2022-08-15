/*
notes
    - as many words as possible per line
        spaces between words should be distributed as evenly as possible
    - LAST LINE has special rules
        left justified
        no extra space between inserted words

approach
    - decide how many words could be put in the same line
    - modify the spaces between words
        - not the last line
            ex:
                maxWidth: 17
                totalChars: word1 + space + word2 + space + word3
                            4       1           2       1       2
                spaces: (maxWidth - totalChars) / gaps
                            17    -   10        / 2  = 3 spaces
                rest: (17 - 10) % 2 = 1 (the first gap has 3 + 1 spaces)
                some gaps may have AT MOST 1 more space than others
        - the last line
            [w1 + space + w2 + space + w3 + space ... + final spacing]
            final spacing: the rest of the spaces needed
                maxWidth - totalChars

variables
    wordIndex: keep record the index in words
    last: the last word index in the same line
    totalChars: the total chars used in the line
        one word + one space worth of characters
    gaps: the number of gaps between wordIndex and last
        last - wordIndex - 1
    result: result string
*/
var fullJustify = function(words, maxWidth) {
    let res = [];
    let n = words.length;
    let index = 0;

    while (index < n) {
        let totalChars = words[index].length;
        let last = index + 1;

        while (last < n) {
            if (totalChars + 1 + words[last].length > maxWidth) break;
            totalChars += (1 + words[last].length);
            last++;
        }

        /*
        in example 1, line 1
        last: 3, index: 0 => 2 gaps in the line
        */
        let gaps = last - index - 1;
        let sb = '';

        if (last === n || gaps === 0) {
            // we're iterating up to last - 1 because we don't want a trailing space
            for (let i = index; i < last - 1; i++) {
                sb += words[i] + ' ';
            }
            // don't forget to add the last word to the string!
            sb += words[last - 1];

            while (sb.length < maxWidth) {
                sb += ' ';
            }
        } else {
            /*
            why use Math.floor here?
                we're trying to determine how many additional spaces we want to add to the line
                we can't add less than 1 of a space
                we floor so we don't add more spces than we need
                e.g. maxWidth = 16, totalChars = 15, gaps = 2
                    16 - 15 / 2 = 0.5
                    we only need 1 more gap. It'll be added with our rest variable
            */
            let spaces = Math.floor((maxWidth - totalChars) / gaps);
            let rest = (maxWidth - totalChars) % gaps;
            // console.log(`maxWidth: ${maxWidth}, totalChars: ${totalChars}, gaps: ${gaps}, spaces: ${spaces}, rest: ${rest}`)

            for (let i = index; i < last - 1; i++) {
                sb += words[i] + ' ';
                /*
                add extra spaces
                i - index < rest ? 1 : 0
                ^ if the number of spaces on a line does not divide evenly
                between words, the empty slots on the left will be assigned
                more spaces than the slots on the right
                */
                for (let j = 0; j < spaces + (i - index < rest ? 1 : 0); j++) {
                    sb += ' ';
                }
            }

            sb += words[last - 1];
        }
        res.push(sb);
        // update index to 'last', it left off as the next index we should start at
        // if (totalChars + 1 + words[last].length > maxWidth) break;
        index = last;
    }
    return res;
};