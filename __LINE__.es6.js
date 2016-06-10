const __LINE__ = (level = 0) => {
	const stack = new Error().stack;
	const lines = stack.split('\n')
	const lineInfo = lines[2 + level].trim().replace(/^at /, '')

	const [match, fileName, lineNumber, charNumber] = lineInfo.match(/(.+):([^:]+):([^:]+)/);

	return lineNumber;
}

const _ = {
	get LINE__ () {
		return __LINE__(1);
	}
};

__LINE__._ = _;

module.exports = __LINE__;
