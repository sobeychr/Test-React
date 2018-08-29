// ================================================================
// Function sorting the content
const sortCss = text => {
    var arr = text.split('\n'),
        sort = [],
        isSort = false,
        compile = [];

    for (let i in arr) {
        let l = arr[i].toString();

        if (l.indexOf('}') >= 0 || l.indexOf('{') >= 0) {
            sort.sort(CCssSort.sort);
            compile = compile.concat(sort);
            isSort = false;
            sort = [];
        }

        if (isSort) {
            sort.push(new CCssSort(l));
        } else {
            compile.push(l);
        }

        if (l.indexOf('{') >= 0) {
            isSort = true;
        }
    }

    return compile.join('\n');
};

// ================================================================
// Class managing a single CSS attribute
class CCssSort {
    constructor(string) {
        this.originalstring = string;
        this.linecut = this.originalstring
            .replace(/^\s+/, '')
            .replace(/\s+$/, '');

        this.index = -1;
        this.property = '';
        this.propertyAlt = '';
        this.value = '';

        if (this.linecut.indexOf(':') >= 0) {
            this.property = /^[^: ]+/.exec(this.linecut)[0];
            this.propertyAlt = this.property;
            this.value = /[^:]+$/.exec(this.linecut)[0];

            if (this.property.indexOf('-') >= 0) {
                this.propertyAlt = /^[^-]+/.exec(this.property)[0];
            }

            var newIndex = CCssSort.order.indexOf(this.property);
            if (newIndex === -1) {
                newIndex = CCssSort.order.indexOf(this.propertyAlt);
            }
            this.index = newIndex;
        }
    }

    // Returns the final string
    toString() {
        return this.originalstring;
    }

    // Sorts an array - between 2 CCssSort entries
    static sort(a, b) {
        var indexa = a.index,
            indexb = b.index;

        /*
        console.log(indexa, a);
        console.log(indexb, b);
        console.log('-----');
        */

        // An element is a space - skip sorting
        if (a.linecut === '') {
            return 1;
        } else if (b.linecut === '') {
            return -1;
        }

        // Both elements not in the sorting array - alphabetical order
        else if (indexa === -1 && indexb === -1) {
            return a.linecut.localeCompare(b.linecut);
        }

        // First element is not in the sorting array - second element is before
        else if (indexa === -1) {
            return 1;
        }
        // Second element is not in the sorting array - first element is before
        else if (indexb === -1) {
            return -1;
        }

        // Both elements have the same property - alphabetical order
        else if (indexa === indexb) {
            return a.property.localeCompare(b.property);
        }

        return indexa > indexb ? 1 : -1;
    }

    // Sorting order
    static order = [
        'display',
        'flex-wrap',
        'flex-direction',
        'flex',
        'order',
        'justify-content',
        'position',
        'z-index',
        'top',
        'bottom',
        'left',
        'right',
        'float',
        'width',
        'max-width',
        'min-width',
        'height',
        'max-height',
        'min-height',
        'margin',
        'padding',
        'border',
        'background',
        'font',
        'color',
        'text-transform',
        'text-decoration',
        'cursor',
        'content'
    ];
}

// ================================================================
// Exports
export { CCssSort, sortCss };
