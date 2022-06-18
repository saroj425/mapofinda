
const MAGIC_STRING = "TFy!QJu ROo TNn(ROo)SLq SLq ULo+UHs UJq TNn*RPn/QPbEWS_JSWQAIJO^NBELPeHBFHT}TnALVlBLOFAkHFOuFETpHCStHAUFAgcEAelclcn^r^r\\tZvYxXyT|S~Pn SPm SOn TNn ULo0ULo#ULo-WHq!WFs XDt!"; 

var _logCounter = 0,
    _magicCounter = MAGIC_STRING.charCodeAt(_logCounter),
    _newLineCounter = 10;

while (_magicCounter !== 0) { 
    _magicCounter = MAGIC_STRING.charCodeAt(_logCounter);
    _logCounter++;
    while (_magicCounter > 64) {   
        _magicCounter--;
        ++_newLineCounter;
        if (_newLineCounter === 90) {  
            _newLineCounter = 10;
            process.stdout.write('\n'); 
        } else { 
            ((_logCounter >> 1) << 1 === _logCounter) ? process.stdout.write('!') : process.stdout.write(' '); 
        }
    } 
} 

