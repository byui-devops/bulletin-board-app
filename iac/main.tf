provider "aws" {
  region = "us-east-1"
}

resource "aws_security_group" "allow_ssh" {
  name        = "allow_ssh"
  description = "Allow SSH inbound traffic"
  
  ingress {
    description = "SSH from anywhere"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "dev_box" {
  ami                    = "ami-0c02fb55956c7d316" # Amazon Linux 2 AMI (you can update if needed)
  instance_type          = "t2.micro"
  security_groups        = [aws_security_group.allow_ssh.name]
  tags = {
    Name = "DevBox"
  }
}
