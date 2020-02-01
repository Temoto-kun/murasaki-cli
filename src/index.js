const yargs = require('yargs')
const datasetImporter = require('@murasaki/dataset-importer')
const download = require('./commands/download.js')

const { argv, } = yargs
	.command(
		download.name,
		download.description,
		y => {
			y.options(download.options)
		}
	)

datasetImporter(argv)
