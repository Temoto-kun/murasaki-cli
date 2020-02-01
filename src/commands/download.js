module.exports = {
	name: 'download <url>',
	description: 'Downloads datasets for use in the app.',
	options: {
		type: {
			alias: 't',
			type: 'string',
			nargs: 1,
			description: 'Type of dataset.',
			demandOption: true,
		},
		unzip: {
			alias: 'u',
			nargs: 1,
			type: 'string',
			description: 'What decompression to use for the input',
			default: 'none',
		},
		output: {
			alias: 'o',
			type: 'string',
			nargs: 1,
			description: 'Output to save the dataset.',
		},
		format: {
			alias: 'f',
			type: 'string',
			nargs: 1,
			description: 'Format of the output.',
		},
	}
}
