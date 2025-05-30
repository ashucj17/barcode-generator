// Code 128 character patterns
        const CODE128 = {
            ' ': [2,1,2,2,2,2], '!': [2,2,2,1,2,2], '"': [2,2,2,2,2,1], '#': [1,2,1,2,2,3],
            '$': [1,2,1,3,2,2], '%': [1,3,1,2,2,2], '&': [1,2,2,2,1,3], "'": [1,2,2,3,1,2],
            '(': [1,3,2,2,1,2], ')': [2,2,1,2,1,3], '*': [2,2,1,3,1,2], '+': [2,3,1,2,1,2],
            ',': [1,1,2,2,3,2], '-': [1,2,2,1,3,2], '.': [1,2,2,2,3,1], '/': [1,1,3,2,2,2],
            '0': [1,2,3,1,2,2], '1': [1,2,3,2,2,1], '2': [1,3,3,1,2,1], '3': [1,3,3,2,1,1],
            '4': [2,1,3,2,1,2], '5': [2,2,3,1,1,2], '6': [2,2,1,1,3,2], '7': [2,1,1,2,3,2],
            '8': [2,2,1,2,3,1], '9': [3,1,1,1,2,2], ':': [3,1,1,2,2,1], ';': [3,2,1,1,2,1],
            '<': [3,2,1,2,1,1], '=': [3,1,2,1,1,2], '>': [3,2,2,1,1,1], '?': [3,1,1,2,1,2],
            '@': [2,1,2,1,2,3], 'A': [2,1,2,3,2,1], 'B': [2,3,2,1,2,1], 'C': [1,1,1,3,2,3],
            'D': [1,3,1,1,2,3], 'E': [1,3,1,3,2,1], 'F': [1,1,2,3,1,3], 'G': [1,3,2,1,1,3],
            'H': [1,3,2,3,1,1], 'I': [2,1,1,3,1,3], 'J': [2,3,1,1,1,3], 'K': [2,3,1,3,1,1],
            'L': [1,1,2,1,3,3], 'M': [1,1,2,3,3,1], 'N': [1,3,2,1,3,1], 'O': [1,1,3,1,2,3],
            'P': [1,1,3,3,2,1], 'Q': [1,3,3,1,2,1], 'R': [3,1,3,1,2,1], 'S': [2,1,1,3,3,1],
            'T': [2,3,1,1,3,1], 'U': [2,1,3,1,1,3], 'V': [2,1,3,3,1,1], 'W': [2,1,3,1,3,1],
            'X': [3,1,1,1,2,3], 'Y': [3,1,1,3,2,1], 'Z': [3,3,1,1,2,1], '[': [3,1,2,1,1,3],
            '\\': [3,1,2,3,1,1], ']': [3,3,2,1,1,1], '^': [3,1,4,1,1,1], '_': [2,2,1,4,1,1],
            '`': [4,3,1,1,1,1], 'a': [1,1,1,2,2,4], 'b': [1,1,1,4,2,2], 'c': [1,2,1,1,2,4],
            'd': [1,2,1,4,2,1], 'e': [1,4,1,1,2,2], 'f': [1,4,1,2,2,1], 'g': [1,1,2,2,1,4],
            'h': [1,1,2,4,1,2], 'i': [1,2,2,1,1,4], 'j': [1,2,2,4,1,1], 'k': [1,4,2,1,1,2],
            'l': [1,4,2,2,1,1], 'm': [2,4,1,2,1,1], 'n': [2,2,1,1,1,4], 'o': [4,1,3,1,1,1],
            'p': [2,4,1,1,1,2], 'q': [1,3,4,1,1,1], 'r': [1,1,1,2,4,2], 's': [1,2,1,1,4,2],
            't': [1,2,1,2,4,1], 'u': [1,1,4,2,1,2], 'v': [1,2,4,1,1,2], 'w': [1,2,4,2,1,1],
            'x': [4,1,1,2,1,2], 'y': [4,2,1,1,1,2], 'z': [4,2,1,2,1,1], '{': [2,1,2,1,4,1],
            '|': [2,1,4,1,2,1], '}': [4,1,2,1,2,1], '~': [1,1,1,1,4,3]
        };

        // Code 39 character patterns
        const CODE39 = {
            '0': [1,2,1,1,2,1,2,1,1], '1': [2,1,1,1,2,1,1,1,2], '2': [1,1,2,1,2,1,1,1,2],
            '3': [2,1,2,1,2,1,1,1,1], '4': [1,2,1,1,1,1,2,1,2], '5': [2,1,1,1,1,1,2,1,2],
            '6': [1,1,2,1,1,1,2,1,2], '7': [1,2,1,1,2,1,1,1,2], '8': [2,1,1,1,2,1,1,1,2],
            '9': [1,1,2,1,2,1,1,1,2], 'A': [2,1,1,1,1,2,1,2,1], 'B': [1,1,2,1,1,2,1,2,1],
            'C': [2,1,2,1,1,2,1,1,1], 'D': [1,2,1,1,1,2,1,2,1], 'E': [2,1,1,1,1,2,1,2,1],
            'F': [1,1,2,1,1,2,1,2,1], 'G': [1,2,1,1,2,1,1,2,1], 'H': [2,1,1,1,2,1,1,2,1],
            'I': [1,1,2,1,2,1,1,2,1], 'J': [1,2,1,1,1,1,2,2,1], 'K': [2,1,1,1,1,1,2,2,1],
            'L': [1,1,2,1,1,1,2,2,1], 'M': [2,1,2,1,1,1,1,2,1], 'N': [1,2,1,1,1,1,1,2,2],
            'O': [2,1,1,1,1,1,1,2,2], 'P': [1,1,2,1,1,1,1,2,2], 'Q': [1,2,1,2,1,1,1,1,2],
            'R': [2,1,1,2,1,1,1,1,2], 'S': [1,1,2,2,1,1,1,1,2], 'T': [1,2,1,1,1,2,1,1,2],
            'U': [2,2,1,1,1,1,1,1,2], 'V': [1,1,1,2,1,1,1,1,2], 'W': [2,2,1,2,1,1,1,1,1],
            'X': [1,2,2,1,1,1,1,1,2], 'Y': [2,1,1,2,1,1,1,1,2], 'Z': [1,1,2,2,1,1,1,1,2],
            ' ': [1,2,2,1,1,1,1,2,1], '$': [1,2,1,2,1,2,1,1,1], '%': [1,1,1,2,1,2,1,2,1],
            '*': [1,2,1,1,1,2,1,2,1], '+': [1,2,1,2,1,1,1,2,1], '-': [1,2,1,1,1,1,1,2,2],
            '.': [2,2,1,1,1,1,1,2,1], '/': [1,2,1,2,1,2,1,2,1], ':': [1,2,2,1,1,1,1,1,2]
        };

        // EAN-13 patterns
        const EAN13_LEFT_ODD = [
            [3,2,1,1], [2,2,2,1], [2,1,2,2], [1,4,1,1], [1,1,3,2],
            [1,2,3,1], [1,1,1,4], [1,3,1,2], [1,2,1,3], [3,1,1,2]
        ];

        const EAN13_LEFT_EVEN = [
            [1,1,2,3], [1,2,2,2], [2,2,1,2], [1,1,4,1], [2,3,1,1],
            [1,3,2,1], [4,1,1,1], [2,1,3,1], [3,1,2,1], [2,1,1,3]
        ];

        const EAN13_RIGHT = [
            [3,2,1,1], [2,2,2,1], [2,1,2,2], [1,4,1,1], [1,1,3,2],
            [1,2,3,1], [1,1,1,4], [1,3,1,2], [1,2,1,3], [3,1,1,2]
        ];

        const EAN13_PATTERNS = [
            [0,0,0,0,0,0], [0,0,1,0,1,1], [0,0,1,1,0,1], [0,0,1,1,1,0],
            [0,1,0,0,1,1], [0,1,1,0,0,1], [0,1,1,1,0,0], [0,1,0,1,0,1],
            [0,1,0,1,1,0], [0,1,1,0,1,0]
        ];

        // Start, center, and end patterns
        const START_B = [2,1,1,4,1,2];
        const STOP = [2,3,3,1,1,1,2];
        const CODE39_START_STOP = [1,2,1,1,1,2,1,2,1];
        const EAN13_START = [1,1,1];
        const EAN13_CENTER = [1,1,1,1,1];
        const EAN13_END = [1,1,1];

        function generateBarcode() {
            const text = document.getElementById('textInput').value;
            const barWidth = parseInt(document.getElementById('widthInput').value);
            const barHeight = parseInt(document.getElementById('heightInput').value);
            const format = document.getElementById('formatSelect').value;
            const container = document.getElementById('barcodeContainer');

            if (!text) {
                container.innerHTML = '<p>Enter text above to generate a barcode</p>';
                return;
            }

            try {
                let barcodeData;
                switch(format) {
                    case 'code128':
                        barcodeData = encodeCode128B(text);
                        break;
                    case 'code39':
                        barcodeData = encodeCode39(text);
                        break;
                    case 'ean13':
                        barcodeData = encodeEAN13(text);
                        break;
                    default:
                        throw new Error('Unsupported format');
                }
                
                const canvas = createBarcodeCanvas(barcodeData, barWidth, barHeight);
                
                container.innerHTML = '';
                container.appendChild(canvas);
                
                const textDiv = document.createElement('div');
                textDiv.className = 'barcode-text';
                textDiv.textContent = text;
                container.appendChild(textDiv);
                
                const formatDiv = document.createElement('div');
                formatDiv.className = 'barcode-text';
                formatDiv.style.fontSize = '12px';
                formatDiv.style.color = '#888';
                formatDiv.textContent = `Format: ${format.toUpperCase()}`;
                container.appendChild(formatDiv);
                
            } catch (error) {
                container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
            }
        }

        function encodeCode128B(text) {
            const bars = [];
            let checksum = 104; // Start B value
            
            bars.push(...START_B);
            
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                if (!CODE128[char]) {
                    throw new Error(`Character '${char}' not supported in Code 128B`);
                }
                
                bars.push(...CODE128[char]);
                
                const charValue = char.charCodeAt(0) - 32;
                checksum += charValue * (i + 1);
            }
            
            checksum = checksum % 103;
            const checksumChar = String.fromCharCode(checksum + 32);
            if (CODE128[checksumChar]) {
                bars.push(...CODE128[checksumChar]);
            }
            
            bars.push(...STOP);
            
            return bars;
        }

        function encodeCode39(text) {
            const bars = [];
            text = text.toUpperCase();
            
            bars.push(...CODE39_START_STOP);
            bars.push(1);
            
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                if (!CODE39[char]) {
                    throw new Error(`Character '${char}' not supported in Code 39`);
                }
                
                bars.push(...CODE39[char]);
                bars.push(1);
            }
            
            bars.push(...CODE39_START_STOP);
            
            return bars;
        }

        function encodeEAN13(text) {
            if (text.length !== 13 || !/^\d+$/.test(text)) {
                throw new Error('EAN-13 requires exactly 13 digits');
            }
            
            const bars = [];
            const firstDigit = parseInt(text[0]);
            const pattern = EAN13_PATTERNS[firstDigit];
            
            bars.push(...EAN13_START);
            
            for (let i = 1; i <= 6; i++) {
                const digit = parseInt(text[i]);
                if (pattern[i-1] === 0) {
                    bars.push(...EAN13_LEFT_ODD[digit]);
                } else {
                    bars.push(...EAN13_LEFT_EVEN[digit]);
                }
            }
            
            bars.push(...EAN13_CENTER);
            
            for (let i = 7; i <= 12; i++) {
                const digit = parseInt(text[i]);
                bars.push(...EAN13_RIGHT[digit]);
            }
            
            bars.push(...EAN13_END);
            
            return bars;
        }

        function createBarcodeCanvas(barcodeData, barWidth, barHeight) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            const totalWidth = barcodeData.reduce((sum, bar) => sum + bar, 0) * barWidth;
            canvas.width = totalWidth;
            canvas.height = barHeight;
            
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, totalWidth, barHeight);
            
            ctx.fillStyle = 'black';
            
            let x = 0;
            let isBlack = true;
            
            for (let i = 0; i < barcodeData.length; i++) {
                const barCount = barcodeData[i];
                const width = barCount * barWidth;
                
                if (isBlack) {
                    ctx.fillRect(x, 0, width, barHeight);
                }
                
                x += width;
                isBlack = !isBlack;
            }
            
            return canvas;
        }

        function updateInputPlaceholder() {
            const format = document.getElementById('formatSelect').value;
            const input = document.getElementById('textInput');
            const description = document.getElementById('formatDescription');
            
            switch(format) {
                case 'code128':
                    input.placeholder = 'Any ASCII characters';
                    input.value = 'Hello123';
                    description.textContent = 'Code 128 supports all ASCII characters (0-127) including letters, numbers, and symbols. Most versatile format.';
                    break;
                case 'code39':
                    input.placeholder = 'A-Z, 0-9, and $%*+-./: space';
                    input.value = 'HELLO123';
                    description.textContent = 'Code 39 supports uppercase letters A-Z, digits 0-9, and symbols: $ % * + - . / : and space. Simple and widely supported.';
                    break;
                case 'ean13':
                    input.placeholder = 'Exactly 13 digits';
                    input.value = '1234567890123';
                    description.textContent = 'EAN-13 is used for product identification. Requires exactly 13 digits. Commonly seen on retail products.';
                    break;
            }
            generateBarcode();
        }

        // Initialize with default format
        updateInputPlaceholder();